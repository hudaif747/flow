import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  // AlertDialogTrigger,
} from "@/shadcn/components/ui/alert-dialog";
import React, { useEffect, useState } from "react";

interface CookieConsentProps {}
interface CookieConsentState {
  showConsentBanner: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = () => {
  // const [showConsentBanner, setShowConsentBanner] =
  //   useState<CookieConsentState["showConsentBanner"]>(false);

  // useEffect(() => {
  //   const checkCookieConsent = () => {
  //     // Example check: You might implement a more sophisticated check here
  //     if (!localStorage.getItem("cookieConsentGiven")) {
  //       setShowConsentBanner(true);
  //     }
  //   };

  //   checkCookieConsent();
  // }, []);

  // const handleAccept = () => {
  //   localStorage.setItem("cookieConsentGiven", "true");
  //   setShowConsentBanner(false);
  //   // Add any actions you need to take when the user accepts cookies
  // };

  // const handleReject = () => {
  //   setShowConsentBanner(false);
  //   // Add any actions you need to take when the user rejects cookies
  // };

  return (
    <AlertDialog open={true}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cookies Settings</AlertDialogTitle>
          <AlertDialogDescription>
            This website uses cookies to ensure you get the best experience on
            our website.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleReject}>Deny</AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept}>
            Accept Cookies
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    // <div
    //   style={{
    //     position: "fixed",
    //     bottom: "10px",
    //     right: "10px",
    //     backgroundColor: "white",
    //     padding: "20px",
    //     border: "1px solid #ccc",
    //     zIndex: 1000,
    //   }}
    // >
    //   <p>
    //     This website uses cookies to ensure you get the best experience on our
    //     website.
    //   </p>
    //   <button onClick={handleAccept}>Accept</button>
    //   <button onClick={handleReject}>Reject</button>
    // </div>
  );
};

export default CookieConsent;
