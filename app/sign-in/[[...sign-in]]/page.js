import {AppBar, Button, Container, Toolbar, Typography, Box} from "@mui/material";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {

    return(
        <Container maxWidth="lg">

        <AppBar position="static">

            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Flashcard SaaS 
                </Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passHref>
                    Login </Link>

                </Button>

                <Button color="inherit">
                    <Link href="/sign-up" passHref>
                    Sign Up </Link>

                </Button>
            </Toolbar>
        </AppBar>

        <Box display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">

            <Typography variant="h4">Sign In</Typography>
            <SignIn />


        </Box>

        </Container>
    )

}