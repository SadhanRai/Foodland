"use client";

import React, { useState } from "react";
import Container from "../../container/Container";
import {
  Camera, Settings, User, Mail, Lock, Bell, Shield,
  Trash2, ChevronRight, CheckCircle2, AlertCircle
} from "lucide-react";
import { useUser } from "@/src/hooks/useUser";
import Avatar from "@/src/ui/Avatar";
import Profile from "./Profile";

const AccountSetting = () => {
  const user = useUser();
  const [activeTab, setActiveTab] = useState("personal"); // personal | security | notifications

  // Mock states for UI interaction
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);

  // Reusable Tab Button Component
  const TabBtn = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-all ${activeTab === id
        ? "bg-gray-800 text-white shadow-md shadow-indigo-200"
        : "text-slate-600 hover:bg-slate-100"
        }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4" /> {label}
      </div>
      {activeTab === id && <ChevronRight className="w-4 h-4" />}
    </button>
  );

  return (
    <div className="py-10 bg-[#f8fafc] min-h-screen font-inter">
      <Container>
        <div className="mb-8 flex flex-col">
          <h1 className="text-3xl flex items-center gap-2  font-extrabold text-slate-900 tracking-tight">
            <Settings />
            Settings
          </h1>
          <p className="text-slate-500 mt-2">Manage your account preferences and security.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* SIDEBAR NAVIGATION */}
          <div className="lg:col-span-4 space-y-6">


            {/* Profile Summary Mini-Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 text-center">
              <Profile />

            </div>



            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-2 space-y-1">
              <TabBtn id="personal" icon={User} label="Personal Information" />
              <TabBtn id="security" icon={Shield} label="Security & Password" />
              <TabBtn id="notifications" icon={Bell} label="Notifications" />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px]">

              {/* TAB 1: PERSONAL INFO */}
              {activeTab === "personal" && (
                <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Profile Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" defaultValue={user?.user?.name} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" defaultValue={user?.user?.email} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                    </div>
                  </div>
                  <button className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition shadow-lg">Update Profile</button>
                </div>
              )}

              {/* TAB 2: SECURITY */}
              {activeTab === "security" && (
                <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Password & Security</h3>
                  <p className="text-slate-500 text-sm mb-8">Ensure your account is using a long, random password to stay secure.</p>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">New Password</label>
                        <input type="password" placeholder="Min 8 chars" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Confirm Password</label>
                        <input type="password" placeholder="Match new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                      </div>
                      <button className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition">Save Changes</button>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="text-amber-600 w-5 h-5" />
                        <div>
                          <p className="text-sm font-bold text-amber-900">Delete Account</p>
                          <p className="text-xs text-amber-700">Permanently delete your account and all associated data.</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition">Delete</button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: NOTIFICATIONS */}
              {activeTab === "notifications" && (
                <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h3>

                  <div className="space-y-4">
                    {/* Toggle Switch 1 */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-xl shadow-sm"><Mail className="w-5 h-5 text-indigo-600" /></div>
                        <div>
                          <p className="font-bold text-slate-900">Email Notifications</p>
                          <p className="text-xs text-slate-500">Get updates about your activity via email.</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setEmailNotif(!emailNotif)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${emailNotif ? 'bg-indigo-600' : 'bg-slate-300'}`}
                      >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${emailNotif ? 'translate-x-7' : 'translate-x-1'}`} />
                      </button>
                    </div>

                    {/* Toggle Switch 2 */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-xl shadow-sm"><Bell className="w-5 h-5 text-indigo-600" /></div>
                        <div>
                          <p className="font-bold text-slate-900">Push Notifications</p>
                          <p className="text-xs text-slate-500">Alerts for mentions and messages on desktop.</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setPushNotif(!pushNotif)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${pushNotif ? 'bg-indigo-600' : 'bg-slate-300'}`}
                      >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${pushNotif ? 'translate-x-7' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default AccountSetting;