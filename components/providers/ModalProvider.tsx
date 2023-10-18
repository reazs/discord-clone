"use client";
import React, { useEffect, useState } from "react";
import { CreateServerModal } from "../models/CreateServerModal";
import { InviteModal } from "../models/InviteModal";
import { EditServerModal } from "../models/EditServerModal";
import { MembersModal } from "../models/membersModal";
import { CreateChannelModal } from "../models/CreateChannelModal";
import { LeaveServerModal } from "../models/LeaveServerModal";
import { DeleteServerModal } from "../models/DeleteServerModal";
import { DeleteChannelModal } from "../models/DeleteChannelModal";
import { EditChannelModal } from "../models/EditChannelModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
    </>
  );
};

export default ModalProvider;
