import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { CircleCheck } from "lucide-react";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.jpg";
import card5 from "@/assets/card5.jpg";
import card6 from "@/assets/card6.jpg";
import { Link, useNavigate } from "react-router-dom";

const tickets = [
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: null,
    details: "VIEW DETAILS →",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "USD 32.5 incl. 20% VAT",
    color: "bg-purple-800",
    bgImage: card1,
  },
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: null,
    details: "VIEW DETAILS →",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "FREE",
    color: "bg-orange-600",
    bgImage: card2,
  },
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: "EXCLUSIVE",
    details: "VIEW DETAILS→",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "FREE",
    color: "bg-green-700",
    bgImage: card3,
  },
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: "BESTSELLER",
    details: "VIEW DETAILS →",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "FREE",
    color: "bg-red-800",
    bgImage: card4,
  },
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: null,
    details: "VIEW DETAILS →",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "FREE",
    color: "bg-green-600",
    bgImage: card5,
  },
  {
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: null,
    details: "VIEW DETAILS →",
    description:
      "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
    features: [
      "Access to ConneXions & Investor Lounge",
      "Network Events",
      "All Conference Tracks",
      "All Masterclasses",
      "3 Days Access to the Show",
      "Access to Dubai Internet City Lounge",
    ],
    price: "FREE",
    color: "bg-blue-700",
    bgImage: card6,
  },
];

const TicketCardSkeleton = () => (
  <div className="rounded-xl bg-gray-100 animate-pulse h-[350px] w-full"></div>
);

 
const TicketCard = ({
  ticket,
  index,
  onIncrement,
  onDecrement,
  onViewDetails,
}) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden text-white shadow-xl flex flex-col"
      style={{
        backgroundImage: `url(${ticket.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Side bubbles */}
      <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10"></div>
      <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10"></div>

      {/* Top Header: Title, Badge, View Details */}
      <div
        className={`relative p-4 ${ticket.color} text-white text-sm font-bold`}
      >
        <div className="flex justify-between items-start">
          <div className={`${ticket.badge ? "ml-8" : ""} w-4/5 leading-snug`}>
            {ticket.title}
          </div>
          {ticket.badge && (
            <div className="w-32 h-6 absolute -top-2 -left-6 rotate-[-48deg] z-20 bg-gradient-to-r from-green-500 to-green-700  text-[10px]  uppercase text-white rounded  font-extrabold px-2 py-0.5">
              {ticket.badge}
            </div>
          )}
        </div>
        <button
          className={`text-sm font-bold cursor-pointer mt-1 ${ticket.badge ? "ml-8" : ""}`}
          style={{ color: "#E6FF00" }}
          onClick={() => onViewDetails(ticket)}
        >
          {ticket.details}
        </button>
      </div>

      {/* Feature list with overlay */}
      <div className="relative flex-1">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/60" />
        <div className="relative p-4 space-y-2">
          <p
            className="text-white font-light text-[14.98px]"
            style={{
              fontFamily: "sans-serif",
            }}
          >
            {ticket.description.split("3 days access").map((part, idx, arr) =>
              idx < arr.length - 1 ? (
                <span key={idx}>
                  {part}
                  <span className="font-bold text-green-400">
                    3 DAYS ACCESS
                  </span>
                </span>
              ) : (
                <span key={idx}>{part}</span>
              )
            )}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {ticket.features.map((feature, i) => {
              const isDisabledFeature =
                (index === 2 || index === tickets.length - 1) &&
                (i === 4 || i === 5);

              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-normal ${
                    isDisabledFeature
                      ? "text-white/40 border-white/10 cursor-not-allowed bg-white/5"
                      : "text-white border-white/20 bg-white/5"
                  }`}
                >
                  <CheckCircle
                    className={`w-4 h-4 ${
                      isDisabledFeature ? "text-white/40" : "text-green-400"
                    }`}
                  />
                  <span>{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 border-t border-white/10 bg-black/80 text-xs">
        <div className="flex justify-between items-center">
          <div className="leading-tight">
            <div className="font-semibold text-sm">
              {index === 0 ? "USD 32.5" : "FREE"}
            </div>
            <div className="text-[10px] text-gray-300">
              {index === 0 ? "incl. 20% VAT" : "INCL. 19% VAT"}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDecrement}
              className="bg-white text-black font-bold w-6 h-6 rounded text-sm"
            >
              −
            </button>
            <span className="text-white text-sm font-semibold">
              {ticket.quantity}
            </span>
            <button
              onClick={onIncrement}
              className="bg-white text-black font-bold w-6 h-6 rounded text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Ticket = () => {
  const [ticketList, setTicketList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initialTickets = tickets.map((t, i) => ({
      ...t,
      quantity: 0,
    }));
    const timer = setTimeout(() => {
      setTicketList(initialTickets);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (index, type) => {
    setTicketList((prev) =>
      prev.map((ticket, i) => {
        if (i === index) {
          const newQty =
            type === "inc"
              ? ticket.quantity + 1
              : Math.max(0, ticket.quantity - 1);
          return { ...ticket, quantity: newQty };
        }
        return ticket;
      })
    );
  };

  const totalQuantity = ticketList.reduce((sum, t) => sum + t.quantity, 0);
  // const totalPrice = ticketList.reduce(
  //   (sum, t, i) => sum + (i === 0 ? t.quantity * 32.5 : 0),
  //   0
  // );
  const [selectedTicket, setSelectedTicket] = useState(null);
  return (
    <>
      <Header step={4} />
      <div className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <TicketCardSkeleton key={i} />
              ))
            : ticketList.map((ticket, i) => (
                <TicketCard
                  key={i}
                  ticket={ticket}
                  index={i}
                  onIncrement={() => handleQuantityChange(i, "inc")}
                  onDecrement={() => handleQuantityChange(i, "dec")}
                  navigate={navigate}
                  onViewDetails={(ticketData) => setSelectedTicket(ticketData)}
                />
              ))}
        </div>
      </div>
      {selectedTicket && (
        <div className="fixed inset-0 z-50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedTicket(null)}
              className="absolute top-2 right-2 text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-2">{selectedTicket.title}</h2>
            <p className="text-sm mb-4">{selectedTicket.description}</p>

            <ul className="text-sm list-disc list-inside space-y-1 mb-4">
              {selectedTicket.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="text-right font-semibold text-green-700">
              {selectedTicket.price}
            </div>
          </div>
        </div>
      )}
      <Footer />
      <div
        className="py-4 text-white"
        style={{
          background: "linear-gradient(90deg, #27963D 0%, #134323 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-end items-center px-4 gap-3 mr-7">
          <div className="flex flex-col items-end">
            <div className="text-sm whitespace-nowrap">
              <span className="mr-1">Total:</span>
              <span className="text-2xl font-bold">
                EUR {totalQuantity.toFixed(2)}
              </span>
              <span className="ml-1 text-md">Incl. 19% VAT</span>
            </div>
            <div className="text-xs">View Ticket Summary</div>
          </div>
          <Link to="/register">
            <button
              className="bg-white text-green-700 font-semibold text-sm px-4 py-2 rounded hover:bg-gray-100 cursor-pointer disabled:opacity-50 "
              disabled={totalQuantity === 0}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ticket;
