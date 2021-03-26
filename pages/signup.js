// File - /pages/signup.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout";
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Signup() {
  return (
      <>
        <Head>
          <title>Register Page</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Layout>
            <div className="register-wrap">
                <Form className="form-register">
                    <img className="mb-4" alt="" width="72" height="72" src="/register.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Register a New Account</h1>
                    <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <FormControl type="text" placeholder="First Name" className="mr-sm-2"
                        required="true" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl type="text" placeholder="Last Name" className="mr-sm-2" 
                        required="true"  />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="Email" className="mr-sm-2" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required="true" title="Enter valid email" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" className="mr-sm-2" required="true" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                         />
                    </FormGroup>
                    <Button className="btn-lg btn-block btn-success" type="submit" variant="primary">Register</Button>
                    <br/>
                    <FormGroup>
                        <FormLabel align="center">
                         Already have an Account?<Link href="/"><a>Login Here</a></Link>
                          </FormLabel>
                    </FormGroup>
                </Form>
            </div>
        </Layout>
      </>
  )
}