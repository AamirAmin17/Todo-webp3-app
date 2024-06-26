// src/hooks/useWebSocket.js
import { useEffect, useState } from "react";

export const useWebSocket = (url, currencyPair) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "subscribe",
          product_ids: [currencyPair],
          channels: ["level2"],
        })
      );
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "snapshot" || message.type === "l2update") {
        setData(message);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, [url, currencyPair]);

  return data;
};
