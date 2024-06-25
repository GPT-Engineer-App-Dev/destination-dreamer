import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;

  if (!bookingDetails) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={8} width="100%">
          <Heading as="h1" size="xl">No Booking Details</Heading>
          <Text fontSize="lg">No booking details were found. Please go back and try again.</Text>
          <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>Go Home</Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Booking Confirmation</Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text><strong>Airline:</strong> {bookingDetails.airline}</Text>
          <Text><strong>Departure:</strong> {bookingDetails.departure}</Text>
          <Text><strong>Arrival:</strong> {bookingDetails.arrival}</Text>
          <Text><strong>Departure Date:</strong> {bookingDetails.departureDate}</Text>
          <Text><strong>Return Date:</strong> {bookingDetails.returnDate}</Text>
          <Text><strong>Price:</strong> {bookingDetails.price}</Text>
        </Box>
        <Text fontSize="lg" color="green.500">Your booking has been confirmed!</Text>
        <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>Go Home</Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;