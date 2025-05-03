
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Profile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  github_url: string | null;
  linkedin_url: string | null;
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate('/auth');
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch profile",
      });
      return;
    }

    setProfile(data);
    setDisplayName(data.display_name || "");
    setGithubUrl(data.github_url || "");
    setLinkedinUrl(data.linkedin_url || "");
    setAvatarUrl(data.avatar_url || "");
  };

  const handleUpdateProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: displayName,
        github_url: githubUrl,
        linkedin_url: linkedinUrl,
        avatar_url: avatarUrl,
      })
      .eq('id', user.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update profile",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Profile updated successfully",
    });
    setIsEditing(false);
    getProfile();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  const handlePasswordReset = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user?.email) return;

    const { error } = await supabase.auth.resetPasswordForEmail(user.email);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send password reset email",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Password reset email sent",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile?.avatar_url || ''} />
                <AvatarFallback>
                  <User className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{profile?.display_name}</h2>
                <p className="text-gray-500">{profile?.id}</p>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Display Name</label>
                  <Input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Display Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Avatar URL</label>
                  <Input
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="Avatar URL"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">GitHub URL</label>
                  <Input
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">LinkedIn URL</label>
                  <Input
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleUpdateProfile}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  {profile?.github_url ? (
                    <a
                      href={profile.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {profile.github_url}
                    </a>
                  ) : (
                    <span className="text-gray-500">No GitHub profile added</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  {profile?.linkedin_url ? (
                    <a
                      href={profile.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {profile.linkedin_url}
                    </a>
                  ) : (
                    <span className="text-gray-500">No LinkedIn profile added</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                  <Button variant="outline" onClick={handlePasswordReset}>
                    Reset Password
                  </Button>
                  <Button variant="destructive" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
