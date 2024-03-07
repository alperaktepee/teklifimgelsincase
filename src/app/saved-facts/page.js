"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const SavedFacts = () => {
  const [savedFacts, setSavedFacts] = useState(
    JSON.parse(window?.localStorage?.getItem("savedFacts")) || []
  );

  const id = window?.localStorage?.getItem("session_id");

  const handleDelete = (index) => {
    // Create a new array excluding the item to be deleted
    const updatedFacts = savedFacts.filter((_, i) => i !== index);

    setSavedFacts(updatedFacts);
    // Save the updated facts array back to localStorage
    window?.localStorage?.setItem("savedFacts", JSON.stringify(updatedFacts));
    // Force re-render by updating the component state
  };

  return (
    <div className="container-facts">
      <div className="message">
        {!id ? (
          <p className="no-fact">
            You need to authorize to view the saved facts!
          </p>
        ) : (
          <div className="facts">
            {savedFacts.length === 0 && (
              <p className="no-fact">No fact found to display!</p>
            )}

            {savedFacts.map((item, index) => (
              <div className="fact" key={index}>
                <span>{item.text}</span>
                <span
                  className="fact-delete"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete size={25} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedFacts;
