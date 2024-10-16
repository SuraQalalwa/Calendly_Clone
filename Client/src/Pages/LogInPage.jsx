import { useState } from "react";
import { Typography, TextField, Button, Grid, Container, Link, Box } from "@mui/material";
import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import { Link as RouterLink } from "react-router-dom";

export function LogInPage() {
    const [showPasswordInput, setShowPasswordInput] = useState(false);

    // Function to handle the "Log In" button click
    const handleLoginClick = () => {
        setShowPasswordInput(true);
    };

    return (
        <>
            <Box><NavBar /></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'left', marginTop: "8%", marginBottom: "7%" }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" component="h2" fontWeight="bold" color="#0b3558">
                                Welcome back
                            </Typography>
                            <Typography variant="h2" component="h2" fontWeight="bold" color="#0b3558">
                                to <span style={{ color: "#006bff" }}>Calendly</span>
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5, marginTop: 4 }}>
                                Log in to your account to get back to your hub for scheduling meetings.
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                Email Address
                            </Typography>
                            <TextField variant="outlined" placeholder="Enter your email" fullWidth sx={{ marginTop: 1 }} />

                            {showPasswordInput && (
                                <>
                                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                                        Password
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        placeholder="Enter your password"
                                        fullWidth
                                        sx={{ marginTop: 1 }}
                                    />
                                </>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: "100%", height: "50px", marginTop: 2 }}
                                onClick={handleLoginClick}
                            >
                                {showPasswordInput ? "Log In" : "Next"}
                            </Button>

                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                Don’t have an account?{" "}
                                <Link component={RouterLink} to="/signup" style={{ color: "#486bff" }}>
                                    Sign Up
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
