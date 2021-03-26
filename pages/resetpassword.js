// File - /pages/resetpassword.js
import Head from 'next/head'
import Layout from "../components/Layout";
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function ResetPassword() {
  return (
      <>
        <Head>
          <title>Reset Password</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <img className="mb-4" alt="" width="72" height="72" src="/secure.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Reset Password</h1>
                    <FormGroup>
                        <FormLabel>Send reset link to existing Email</FormLabel>
                        <FormControl type="text" placeholder="Email" className="mr-sm-2" required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter existing email"/>
                    </FormGroup>

                    <Button className="btn-lg btn-block btn-danger" type="submit" variant="primary">Reset Password</Button>
                    <br/>
                </Form>
            </div>
        </Layout>
      </>
  )
}