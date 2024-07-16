"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  console.log(messages);

  return (
    <section className="flex justify-center items-center h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-gray-900 p-4 rounded-lg"
      >
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-gray-700"
              }`}
            >
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                } text-gray-400`}
              >
                {m.role}
              </span>{" "}
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Say something...
          </label>
          <button
            className="bg-white text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          onChange={handleInputChange}
          className="text-white bg-gray-800 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Type something..."
          autoFocus
        />
      </form>
    </section>
  );
}
