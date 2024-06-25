import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Mock flight data
    const mockFlights = [
      { id: 1, airline: "Airline A", departure, arrival, departureDate, returnDate, price: "$200" },
      { id: 2, airline: "Airline B", departure, arrival, departureDate, returnDate, price: "$250" },
    ];
    setFlights(mockFlights);
  };

  const handleConfirmBooking = (flight) => {
    navigate("/booking-confirmation", { state: { bookingDetails: flight } });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>Search Flights</Button>
        <Box width="100%">
          {flights.length > 0 && (
            <VStack spacing={4} mt={8}>
              {flights.map((flight) => (
                <Box key={flight.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
                  <Text><strong>Airline:</strong> {flight.airline}</Text>
                  <Text><strong>Departure:</strong> {flight.departure}</Text>
                  <Text><strong>Arrival:</strong> {flight.arrival}</Text>
                  <Text><strong>Departure Date:</strong> {flight.departureDate}</Text>
                  <Text><strong>Return Date:</strong> {flight.returnDate}</Text>
                  <Text><strong>Price:</strong> {flight.price}</Text>
                  <Button colorScheme="teal" size="md" mt={4} onClick={() => handleConfirmBooking(flight)}>Confirm Booking</Button>
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default FlightSearch;