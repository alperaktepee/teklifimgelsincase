"use client";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

const SavedFacts = () => {
  const [savedFacts, setSavedFacts] = useState([]);

  const [id, setId] = useState(null);
  useEffect(() => {
    const id = window?.localStorage?.getItem("session_id");
    setId(id);

    if (typeof window !== "undefined") {
      setSavedFacts(JSON.parse(window?.localStorage?.getItem("savedFacts")));
    }
  }, []);

  const handleDelete = (index) => {
    // Create a new array excluding the item to be deleted
    const updatedFacts = savedFacts.filter((_, i) => i !== index);

    setSavedFacts(updatedFacts);
    // Save the updated facts array back to localStorage
    if (typeof window !== "undefined") {
      window?.localStorage?.setItem("savedFacts", JSON.stringify(updatedFacts));
    }
    // Force re-render by updating the component state
  };

  return (
    <>
      <h1 className="saved-facts-title">Saved Facts</h1>

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

              {savedFacts?.map((item, index) => (
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
    </>
  );
};

export default SavedFacts;
