import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2Off } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center pb-2">
          <div className="w-full flex justify-center mb-6">
            <div className="p-3 rounded-full bg-red-100">
              <Link2Off className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl sm:text-3xl">
            Link não encontrado
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p className="text-muted-foreground">
            O link que você tentou acessar parece já não estar mais disponível
            😢.
          </p>
        </CardContent>
        {/* <CardFooter className="flex justify-center pt-2">
          <Link href="/">
            <Button variant="default" className="gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </CardFooter> */}
      </Card>
    </div>
  );
}
