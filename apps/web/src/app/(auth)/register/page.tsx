import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  return (
    <section className="relative">
      <div className="absolute container mx-auto px-4 overflow-hidden h-screen w-full bg-[url('/assets/images/bg.register-login.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="grid grid-cols-2 py-4">
          {/* form section */}
          <div className="">
            <Card>
              <CardHeader className="space-y-2">
                <CardDescription className="text-[#515866]">
                  START FOR FREE
                </CardDescription>
                <CardTitle className="text-white flex gap-1">
                  Create new account <p className=" text-[#2167A7]">.</p>
                </CardTitle>
                <CardDescription className="text-[#515866] flex gap-2">
                  Already a Member?
                  <p className="hover:underline text-[#2167A7]">Log in</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Label htmlFor="username" className="text-base text-white">
                    Username
                  </Label>
                  <Input type="name" placeholder="Your Username Here" />
                  <Label htmlFor="email" className="text-base text-white">
                    Email
                  </Label>
                  <Input type="email" placeholder="Your Email Here" />
                  <Label htmlFor="password" className="text-base text-white">
                    Password
                  </Label>
                  <Input type="password" placeholder="Your password Here" />
                </form>
              </CardContent>
              <CardFooter className="text-white">
                <Button className="bg-[#2167A7]">create account</Button>
              </CardFooter>
            </Card>
          </div>

          <div>kanan</div>
        </div>
      </div>
    </section>
  );
};

export default Register;
