import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => (
  <div>
    <Header />
    <div className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">
          Delicious Eats at Your Fingertips
        </h1>
        <p className="text-muted-foreground mb-6">
          Discover the best local restaurants and order your favorite meals with
          ease.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for food"
            className="border border-input rounded-l-lg p-2 flex-grow"
          />
          <button className="bg-primary text-primary-foreground rounded-r-lg p-2">
            Search
          </button>
        </div>
      </div>

      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex-1 max-w-md">
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/40x40"
            alt="AI Assistant Avatar"
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold">
              AI Assistant{" "}
              <span className="text-muted-foreground text-sm">Just now</span>
            </h2>
            <p>Hi there! How can I help you find the best food in town?</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-secondary text-secondary-foreground rounded-lg p-2">
            Burgers
          </button>
          <button className="bg-secondary text-secondary-foreground rounded-lg p-2">
            Pizza
          </button>
          <button className="bg-secondary text-secondary-foreground rounded-lg p-2">
            Sushi
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
