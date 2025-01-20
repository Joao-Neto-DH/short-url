import CreateAccountModal from "@/components/create-account-modal";
import LoginModal from "@/components/login-modal";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BarChartIcon as ChartBar, Zap, Globe2, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <LinkIcon className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">Shortly</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Button variant="ghost">Entrar</Button> */}
          <LoginModal />
          <CreateAccountModal />
          {/* <Button>Criar conta</Button> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Encurte seu L
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <span
                        key={i}
                        style={{ animationDelay: `${i * 2}00ms` }}
                        className={cn(
                          `inline-block !text-6xl text-blue-600 animate-pulse`
                        )}
                      >
                        O
                      </span>
                    ))}
                  NGOS links
                  <br />
                  Torne seus links mais acessíveis
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Faça seus links menores, mais memoráveis, e fáceis de
                  compartilhar. Rastreie cliques e analise a performance dos
                  seus links.
                </p>
              </div>
              <div className="w-[720px] h-[150px] relative">
                <div className="w-[720px] bg-blue-600 h-[400px] rounded-3xl relative -bottom-10 z-[1]">
                  Foto aqui
                </div>
                <div className="absolute -bottom-[calc(250px_+_40px)] w-[720px] rounded-b-3xl h-[100px] bg-green-600 shadow-2xl shadow-blue-600/70"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="absolute w-[720px] bg-blue-600 h-[400px]">
          Foto aqui
        </div> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Velocidade relâmpago</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Crie links curtos instantaneamente com nossa poderosa
                  tecnologia de encurtar URL.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ChartBar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Detalhes analíticos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Rastreie cliques, localizações, e dispositivos com nosso
                  dashboard analítico.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Global CDN</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Redirecionamentos relâmpagos para URLs globais.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Confiado por <span className="text-blue-600">MILHARES</span>{" "}
                  de usuários
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Junta-te a milhares de usuários satisfeitos que confiam em nós
                  para gerenciar seus links.
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-2xl font-bold">100K+</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Usuários activos
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-2xl font-bold">1M+</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Links encurtados
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="text-2xl font-bold">99.9%</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tempo de actividade
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Pronto para começar?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Crie uma conta agora e comece a encurtar.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Button size="lg">Criar conta</Button>
                <Button variant="outline" size="lg">
                  Entrar
                </Button> */}

                <LoginModal />
                <CreateAccountModal />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Short.Todos direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
