import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Button, Typography, Tabs, Tab } from '@mui/material';
import { Add, Remove, FavoriteBorderOutlined } from '@mui/icons-material';
import { shades } from '../../theme';
import { addToCart } from '../../state';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState('description');
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItem = async () => {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: 'GET' }
    );
    const itemJSON = await item.json();
    setItem(itemJSON.data);
  };

  const getRelatedItems = async () => {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET' }
    );
    const itemsJSON = await items.json();
    setItems(itemsJSON.data);
  };

  useEffect(() => {
    getItem();
    getRelatedItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" margin="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* Images */}
        <Box flex="1 1 40%" mb="40px">
          <img
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            alt={item?.attributes?.name}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Actions */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: '20px' }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          {/* Count And Button */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton
                onClick={() => setCount(Math.max(count - 1, 1))} //short way to make sure the count does not go below 1
              >
                <Remove />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>

            <Button
              sx={{
                backgroundColor: '#222222',
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px',
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlined />
              <Typography sx={{ ml: '5px' }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Information */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === 'description' && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === 'reviews' && <div>reviews</div>}
      </Box>

      {/* Related Items */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.attributes.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
