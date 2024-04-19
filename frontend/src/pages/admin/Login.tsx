import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate();

    const testLogin = () => {
        toast({
          title: "Logged In",
          description: "You have been logged in successfully",
          variant: "success",
        })
        navigate("/dashboard");
      }


    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit" onClick={testLogin}>
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>

        <Toaster  />

        </div>
    )
}

export default Login