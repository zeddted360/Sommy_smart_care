"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

export const WelcomeMessage = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setIsFirstVisit(false);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsFirstVisit(false);
  };

  return (
    <Dialog open={isFirstVisit} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg mx-auto text-center">
        <DialogTitle className="sr-only">Welcome Message</DialogTitle>
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for visiting us! We're thrilled to have you here. Explore
          our amazing services and feel free to reach out if you need
          assistance.
        </p>
        <DialogFooter>
          <Button onClick={handleClose} className="w-full">
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
