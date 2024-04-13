import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/the-dragon-news.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full py-6">
      <Container>
        <Image
          className="mx-auto"
          src={headingImage}
          alt="Logo"
          width={500}
          height={500}
          priority
        />
        <Typography
          color="gray"
          variant="body2"
          textAlign="center"
          className="my-2"
        >
          @2023 The Dragon News Design by Programming Hero.
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
