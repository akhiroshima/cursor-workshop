import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-2xl">Cursor Workshop</CardTitle>
            <Badge variant="secondary">Hiroshima v1</Badge>
          </div>
          <CardDescription>
            Everything is set up and ready to go. Start building with Cursor!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-input">Try typing something</Label>
            <Input id="demo-input" placeholder="Hello from shadcn/ui..." />
          </div>
          <Button className="w-full">Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}
