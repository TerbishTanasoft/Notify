"use client";

import "./notification";
import React, { useEffect, useCallback } from "react";

export default function Home() {

  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Та азтан боллоо 🤩🤩", {
        body: "Та доорх дансруу 20k хийж баталгаажуулснаар шагналын 500k авах болно баярлалаа !! Данс: .........., Утга: Утасны дугаар, Дансны дугаар",
        icon: '/images/SocialPay.png',
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification permission granted!!");
          sendNotification();
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Азаа үзээд азтан болоорой амжилт 😍😎 </h1>
      <button
        onClick={sendNotification}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Азаа үз
      </button>
    </main>
  );
}
