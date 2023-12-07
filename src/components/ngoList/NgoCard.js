import React from 'react';
import { Box, Button } from '@mui/material';
import { Black400, PersianPink, Wenge, White100 } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const NgoCard = ({ id, title, description }) => {
    const nav = useNavigate();
    return (
        <Box
            sx={{
                width: '250px',
                backgroundColor: '#f7f7f7',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                margin: '20px',
                marginLeft: '0px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                    '& .description': {
                        visibility: 'visible',
                    },
                },
            }}
        >
            {/* NGO Logo */}
            <Box
                sx={{
                    width: '75px',
                    height: '75px',
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    backgroundImage: 'url("https://via.placeholder.com/100")', // Placeholder image URL
                    backgroundSize: 'cover',
                }}
            ></Box>
            <Box
                sx={{
                    width: '250px',
                    height: '100px',
                    borderRadius: '25px',
                    backgroundImage: 'url("https://via.placeholder.com/100")', // Placeholder image URL
                    backgroundSize: 'cover',
                    marginRight: '5px',
                }}
            ></Box>

            {/* NGO Title */}
            <Box
                sx={{
                    fontFamily: 'poppins',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: Black400,
                    marginBottom: '10px',
                    marginTop: '5px',
                }}
            >
                {title}
            </Box>

            {/* Description */}
            <Box
                className="description" // added a class for easy targeting
                sx={{
                    fontFamily: 'poppins',
                    fontSize: '14px',
                    color: Black400,
                    marginBottom: '10px',
                    visibility: 'hidden',
                }}
            >
                {description}
            </Box>

            {/* Donate Button */}
            <Button onClick={() => { nav(`/ong-details/${id}`) }}
                sx={{
                    backgroundColor: PersianPink,
                    width: '75%',
                    color: White100,
                    padding: '5px 5px',
                    borderRadius: '35px',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: White100,
                        color: Wenge,
                        fontSize: '18px',
                        border: '2px solid',
                        borderColor: Wenge,
                    },
                }}
            >
                Explore
            </Button>
        </Box>
    );
}

export default NgoCard;
