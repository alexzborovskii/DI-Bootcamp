import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import { AppContext } from "../App";


const Nav = (props) => {
    const [redirect, setRedirect] = useState(null);
    const { token, setToken } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await axios.get("/api/users/logout", {
                headers: {
                    "x-access-token": null,
                },
            });
            if (res.status == 200) {
                setToken(null);
                navigate("/login");
            }
        } catch (err) {
            setToken(null);
            navigate("/login");
        }
    };
    return (
        <Stack spacing={2} direction={"row"}>
            <Button component={Link} to="/">
                Home
            </Button>
            <Button component={Link} to="/login">
                Login
            </Button>
            <Button component={Link} to="/register">
                Register
            </Button>
            <Button onClick={logout}>Logout</Button>
        </Stack>
    );
};

export default Nav;
