import { useTheme, Box, Typography, useMediaQuery } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display={isNonMobile ? 'flex' : 'grid'}
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px,40px)"
      >
        <Box width={isNonMobile ? 'clamp(20%,30%,40%)' : '100%'}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            SHOPIFY
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            dolore distinctio incidunt debitis molestiae laudantium, dolores
            error officiis ad ipsam expedita reprehenderit architecto maxime
            adipisci iusto totam tempore sapiente sed!
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            About Us
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Careers
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Our Stores
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Terms & Conditions
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Privacy Policy
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            Customer Care
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Help Center
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Track Your Order
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Corporate & Bulk Purchasing
          </Typography>
          <Typography mb="30px" sx={{ cursor: 'pointer' }}>
            Returns & Refunds
          </Typography>
        </Box>

        <Box width={isNonMobile ? 'clamp(20%,25%,30%)' : '100%'}>
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">36 JohnDoe Street, Alabama.</Typography>
          <Typography mb="30px">Email: johndoe@gmail.com</Typography>
          <Typography mb="30px">09034567123</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
