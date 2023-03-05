import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/material/Add";
import RemoveIcon from "@mui/material/Remove";
import { shades } from "../Theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useStarw();
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "poiner" }}
        />
        <Box
          display={isHovered ? "blocked" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          paddding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {/* BUTTON */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography varient="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toupperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">{Price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
