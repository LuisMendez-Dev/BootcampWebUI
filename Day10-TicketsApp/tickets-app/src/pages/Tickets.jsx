/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  descriptionValidation,
  titleValidation,
  priorityValidation,
} from "../utils/validations.js";
import useApi from "../hooks/useJsonServer.js";
import "./tickets.css";
import formValidator from "../utils/formValidator.js";
import TicketsForm from "../components/ticketForm/TicketsForm.jsx";
import Card from "../components/card/Card.jsx";

/**
 * Author: Luis Fernando Mendez Marques
 * Date: 03/03/2024
 */

/**
 * Tickets Component
 *
 * This component represents the Tickets page of the application.
 * It allows users to create new tickets with a title, priority, and description.
 * The component handles form validation and submission using the useApi and formValidator hooks.
 *
 * @returns {JSX.Element} The Tickets component
 */

function Tickets() {
  const { sendRequest, error, isLoading } = useApi();
  const [submitResult, setSubmitResult] = useState(null);
  const [ticketData, setTicketData] = useState({
    title: "",
    priority: "", // default value to trigger validation
    description: "",
    resolved: false, //default value
  });
  const [currentTickets, setCurrentTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await sendRequest({ method: "get" });
      setCurrentTickets(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleFormChange = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTicketData({ ...ticketData, errors: {} });

    const isValid = formValidator({
      ticketData,
      titleValidation,
      priorityValidation,
      descriptionValidation,
      setTicketData,
    });

    if (isValid) {
      try {
        const response = await sendRequest({
          method: "post",
          data: ticketData,
        });
        if (response.status === 201) {
          setSubmitResult("success");
          setTicketData({
            title: "",
            priority: "",
            description: "",
            resolved: false,
          });
          await fetchTickets();
        } else {
          setSubmitResult("fail");
        }
      } catch (err) {
        setSubmitResult("fail");
      }
    } else {
      setSubmitResult("error");
    }
  };

  const handleCloseValidation = () => {
    setSubmitResult(null);
    if (submitResult === "error") {
      setTicketData({ ...ticketData, errors: {} });
    }
  };

  return (
    <section className="tickets__container">
      <TicketsForm
        submitResult={submitResult}
        ticketData={ticketData}
        handleCloseValidation={handleCloseValidation}
        isLoading={isLoading}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
      />

      <div className="cards__container">
        <h2 className="cards__container-title">Current Tickets</h2>
        {currentTickets.length === 0 ? (
          <p className="cards__container-subtitle">
            You do not have any tickets
          </p>
        ) : (
          currentTickets.map((ticket, index) => {
            return (
              <Card
                key={index}
                id={ticket.id}
                title={ticket.title}
                priority={ticket.priority}
                description={ticket.description}
                resolved={ticket.resolved}
                fetch={fetchTickets}
                messageDelete={setSubmitResult}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Tickets;
