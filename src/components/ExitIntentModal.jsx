"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ExitIntentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const [hasShownDialog, setHasShownDialog] = useState(false);
  useEffect(() => {
    const handleMouseOut = (event) => {
      if (event.clientY < 50 && !hasShownDialog) {
        setShowDialog(true);
        setHasShownDialog(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasShownDialog]);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Before you leave...</DialogTitle>
          <DialogDescription>
            We'd love to ask you a few questions:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="font-bold">What is the goal of your visit?</p>
          <p>Do you have any questions? Contact us at +91 7802-749-741</p>
          <p>
            Your feedback is important to us and helps us improve our website
            and your user experience.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentDialog;
