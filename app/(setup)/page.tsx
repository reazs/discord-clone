import React from "react";
import { initalProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitalModel } from "@/components/models/initial-modal";
const SetupPage = async () => {
  const profile = await initalProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitalModel />;
};

export default SetupPage;
