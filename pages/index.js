// File - /pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout"
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Home() {
  

  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin" >
                    <img className="mb-4" alt="" width="72" height="72" src="/logo.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Login into Account</h1>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="Email" className="mr-sm-2" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required="true" title="Enter valid email" />
                       
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" className="mr-sm-2" id="password" name="password"
                        required="true" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                        
                    </FormGroup>
                    <Button type="submit" className="btn-lg btn-block" variant="primary">Sign In</Button>
                    <br/>
                    <FormGroup>
                        <FormLabel align="center">
                        Forgot Password?      <Link href="/resetpassword"><a>Click Here</a></Link><br/>
                        Don't have an Account?<Link href="/signup"><a>Register here</a></Link>
                          </FormLabel>
                    </FormGroup>
                </Form>
            </div>
        </Layout>
      </>
  )
}