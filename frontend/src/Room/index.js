import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async element => {
    const appID = 431808175;
    const serverSecret = "9de409b6a73f397ab57819199614a4c3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Piyush Garg"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: false,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://localhost:8000/connect/room/${roomId}`,
        },
      ],
    });
  };

  return (
    <div>
      <div ref={myMeeting}></div>
    </div>
  );
};

export default RoomPage;
