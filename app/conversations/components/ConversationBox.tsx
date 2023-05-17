"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected = false,
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
