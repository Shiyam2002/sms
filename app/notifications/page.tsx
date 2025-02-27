"use client";

import { useState } from "react";
import { Bell, CheckCircle, Trash2, X } from "lucide-react";

type Notification = {
  id: number;
  message: string;
  isRead: boolean;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New assessment available", isRead: false },
    { id: 2, message: "Your manager approved your leave", isRead: false },
    { id: 3, message: "Upcoming meeting at 3 PM", isRead: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  // Clear all notifications
  const clearNotifications = () => setNotifications([]);

  return (
    <div className="relative">
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg"
      >
        <Bell className="h-5 w-5" /> View Notifications
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <Bell className="h-6 w-6 text-gray-700" /> Notifications
            </h1>

            {notifications.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {notifications.map((notif) => (
                  <li
                    key={notif.id}
                    className={`flex justify-between items-center p-3 rounded-md border ${
                      notif.isRead ? "bg-gray-100 text-gray-500" : "bg-gray-50"
                    }`}
                  >
                    <span>{notif.message}</span>
                    {!notif.isRead && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500 text-center">No new notifications.</p>
            )}

            {notifications.length > 0 && (
              <button
                onClick={clearNotifications}
                className="mt-6 flex items-center gap-2 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" /> Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
