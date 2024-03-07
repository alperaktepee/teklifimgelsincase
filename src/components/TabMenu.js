"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const TabMenu = ({ selectedItem }) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    const id = window?.localStorage?.getItem("session_id");
    setId(id);
  }, []);

  const [activeTab, setActiveTab] = useState("random");
  const [fact, setFact] = useState("");
  const [factToday, setFactToday] = useState("");
  const [savedFactsString, setSavedFactsString] = useState(null);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    {
      activeTab === "random"
        ? fetchRandomFact(selectedItem.value)
        : fetchTodayFact(selectedItem.value);
    }
  };

  useEffect(() => {
    {
      fetchRandomFact(selectedItem.value);
      fetchTodayFact(selectedItem.value);
    }
  }, [selectedItem]);

  const saveFact = () => {
    if (!id) {
      toast.error("Please sign in to save facts");
      return;
    }

    let savedFacts = [];

    // Get existing saved facts from localStorage
    const savedFactsString = window?.localStorage?.getItem("savedFacts");
    setSavedFactsString(savedFactsString);
    if (savedFactsString) {
      savedFacts = JSON.parse(savedFactsString);
    }

    // Add the current fact to the array
    if (activeTab === "random") {
      savedFacts.push({ type: "random", text: fact });
    } else if (activeTab === "today") {
      savedFacts.push({ type: "today", text: factToday });
    }

    // Save the updated array back to localStorage
    if (typeof window !== "undefined") {
      window?.localStorage?.setItem("savedFacts", JSON.stringify(savedFacts));
    }

    toast.success("Fact saved successfully!");
  };

  const fetchRandomFact = async (language) => {
    try {
      const response = await axios.get(
        `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setFact(response.data.text);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTodayFact = async (language) => {
    try {
      const response = await axios.get(
        `https://uselessfacts.jsph.pl/api/v2/facts/today?language=${language}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setFactToday(response.data.text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="tab-menu-container">
        <div className="tabMenu">
          <button
            className={activeTab === "random" ? "active" : ""}
            onClick={() => handleTabChange("random")}
          >
            Random Fact
          </button>
          <button
            className={activeTab === "today" ? "active" : ""}
            onClick={() => handleTabChange("today")}
          >
            Fact of the Day
          </button>
        </div>

        <div className="tabContent">
          {activeTab === "random" && <div>{fact}</div>}
          {activeTab === "today" && (
            <div>
              <p>{factToday}</p>
            </div>
          )}
        </div>

        <div className="button-container-tab">
          {activeTab === "random" && (
            <button
              className="button-form"
              onClick={() => fetchRandomFact(selectedItem.value)}
            >
              Try Again !
            </button>
          )}
          <button
            className="button-form"
            onClick={saveFact}
            style={{ marginLeft: "10px" }}
          >
            Save Fact
          </button>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
