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
    <section className="relative h-screen w-full bg-[url('/assets/images/bg.register-login.jpg')] bg-bottom bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent">
        <div className="grid md:grid-cols-2 py-12 md:mt-7 container mx-auto px-4 md:px-12 overflow-hidden">
          {/* form section */}
          <div className="flex items-center justify-center">
            <Card className="z-50 border-none mx-[16px] w-full max-w-md">
              <CardHeader className="space-y-2">
                <CardDescription className="text-[#515866]">
                  START FOR FREE
                </CardDescription>
                <CardTitle className="text-[32px] md:text-4xl font-bold text-white inline-block">
                  Create new account <span className=" text-[#2167A7]">.</span>
                </CardTitle>
                <CardDescription className="text-[#515866] inline-block">
                  Already a Member?
                  <span className="hover:underline cursor-pointer text-[#2167A7]">Log in</span>
                </CardDescription>
              </CardHeader>
              <CardContent >
                <form className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="username" className=" text-base text-white">
                      Username
                    </Label>
                    <Input type="name" placeholder="Your Username Here" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-base text-white">
                      Email
                    </Label>
                    <Input type="email" placeholder="Your Email Here" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-base text-white">
                      Password
                    </Label>
                    <Input type="password" placeholder="Your password Here" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="text-white">
                <Button className="w-full bg-[#2167A7] md:w-1/3">create account</Button>
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
