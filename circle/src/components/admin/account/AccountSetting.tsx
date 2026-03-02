"use client";

import React, { useState } from "react";
import Container from "../../container/Container";
import {
  Settings,
  User,
  Mail,
  Bell,
  Shield,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { useUser } from "@/src/hooks/useUser";
import Profile from "./Profile";

const AccountSetting = () => {
  const { user, loading, error } = useUser();
  const [activeTab, setActiveTab] = useState("personal");
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);

  // ---------------- Skeleton Components ----------------

  const TextSkeleton = ({ width = "w-24", height = "h-5" }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${width} ${height}`} />
  );

  const InputSkeleton = () => (
    <div className="animate-pulse h-12 w-full bg-gray-200 rounded-2xl" />
  );

  const CircleSkeleton = () => (
    <div className="animate-pulse w-20 h-20 rounded-full bg-gray-200 mx-auto" />
  );

  // ---------------- Reusable Tab Button ----------------

  const TabBtn = ({ id, icon: Icon, label }: any) => (
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

  if (error) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  return (
    <div className="py-10 bg-[#f8fafc] min-h-screen font-inter">
      <Container>
        {/* Header */}
        <div className="mb-8 flex flex-col">
          <h1 className="text-3xl flex items-center gap-2 font-extrabold text-slate-900 tracking-tight">
            <Settings />
            Settings
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your account preferences and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Mini Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 text-center">
              {loading ? (
                <div className="space-y-4 flex flex-col items-center">
                  <CircleSkeleton />
                  <TextSkeleton width="w-32" />
                  <TextSkeleton width="w-40" height="h-4" />
                </div>
              ) : (
                <Profile />
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-2 space-y-1">
              <TabBtn id="personal" icon={User} label="Personal Information" />
              <TabBtn id="security" icon={Shield} label="Security & Password" />
              <TabBtn id="notifications" icon={Bell} label="Notifications" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] p-6 md:p-8">

              {/* PERSONAL TAB */}
              {activeTab === "personal" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Profile Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">
                        Full Name
                      </label>
                      {loading ? (
                        <InputSkeleton />
                      ) : (
                        <input
                          type="text"
                          defaultValue={user?.name || ""}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">
                        Email Address
                      </label>
                      {loading ? (
                        <InputSkeleton />
                      ) : (
                        <input
                          type="email"
                          defaultValue={user?.email || ""}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                      )}
                    </div>
                  </div>

                  {!loading && (
                    <button className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition shadow-lg">
                      Update Profile
                    </button>
                  )}
                </>
              )}

              {/* SECURITY TAB */}
              {activeTab === "security" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Password & Security
                  </h3>

                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl"
                    />
                    <button className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-lg">
                      Save Changes
                    </button>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="text-amber-600 w-5 h-5" />
                        <div>
                          <p className="text-sm font-bold text-amber-900">
                            Delete Account
                          </p>
                          <p className="text-xs text-amber-700">
                            Permanently delete your account and all data.
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "notifications" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Notification Preferences
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                      <p className="font-bold text-slate-900">
                        Email Notifications
                      </p>
                      <button
                        onClick={() => setEmailNotif(!emailNotif)}
                        className={`w-12 h-6 rounded-full transition ${emailNotif ? "bg-indigo-600" : "bg-slate-300"
                          }`}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                      <p className="font-bold text-slate-900">
                        Push Notifications
                      </p>
                      <button
                        onClick={() => setPushNotif(!pushNotif)}
                        className={`w-12 h-6 rounded-full transition ${pushNotif ? "bg-indigo-600" : "bg-slate-300"
                          }`}
                      />
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountSetting;