"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Users, Target, Trophy, Eye, Smile, Hand, Star, Sparkles, Crown, Sword } from "lucide-react"

export default function TrucoArgentino() {
  const [activeSection, setActiveSection] = useState("introduccion")

  const sections = [
    { id: "introduccion", title: "Introducción", icon: Star },
    { id: "objetivo", title: "Objetivo", icon: Target },
    { id: "cartas", title: "Valor de Cartas", icon: Hand },
    { id: "modalidades", title: "Modalidades", icon: Users },
    { id: "estructura", title: "Estructura", icon: ChevronRight },
    { id: "cantos", title: "Cantos y Envido", icon: Eye },
    { id: "flor", title: "Flor", icon: Smile },
    { id: "puntaje", title: "Puntaje", icon: Trophy },
    { id: "senas", title: "Señas", icon: Eye },
    { id: "notas", title: "Notas", icon: Star },
  ]

  const cartas = [
    {
      nombre: "Ancho de espadas",
      valor: "1°",
      descripcion: "1 de espadas - La carta más fuerte",
      imagen: "/placeholder.svg?height=120&width=80&text=A♠&bg=1a1a1a&color=ffffff",
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-900",
    },
    {
      nombre: "Ancho de bastos",
      valor: "2°",
      descripcion: "1 de bastos - Segunda carta más fuerte",
      imagen: "/placeholder.svg?height=120&width=80&text=A♣&bg=8b4513&color=ffffff",
      color: "from-yellow-300 to-yellow-500",
      textColor: "text-yellow-900",
    },
    {
      nombre: "Siete de espadas",
      valor: "3°",
      descripcion: "7 de espadas",
      imagen: "/placeholder.svg?height=120&width=80&text=7♠&bg=2c2c2c&color=ffffff",
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-900",
    },
    {
      nombre: "Siete de oros",
      valor: "4°",
      descripcion: "7 de oros",
      imagen: "/placeholder.svg?height=120&width=80&text=7♦&bg=ffd700&color=000000",
      color: "from-orange-300 to-orange-500",
      textColor: "text-orange-900",
    },
    {
      nombre: "Treses",
      valor: "5°",
      descripcion: "Todos los 3",
      imagen: "/placeholder.svg?height=120&width=80&text=3&bg=4169e1&color=ffffff",
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-900",
    },
    {
      nombre: "Doses",
      valor: "6°",
      descripcion: "Todos los 2",
      imagen: "/placeholder.svg?height=120&width=80&text=2&bg=32cd32&color=ffffff",
      color: "from-green-400 to-green-600",
      textColor: "text-green-900",
    },
    {
      nombre: "Anchos falsos",
      valor: "7°",
      descripcion: "1 de copas y 1 de oros",
      imagen: "/placeholder.svg?height=120&width=80&text=A♥&bg=dc143c&color=ffffff",
      color: "from-red-400 to-red-600",
      textColor: "text-red-900",
    },
    {
      nombre: "Doce (Rey)",
      valor: "8°",
      descripcion: "Todas las figuras de rey",
      imagen: "/placeholder.svg?height=120&width=80&text=K&bg=800080&color=ffffff",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-900",
    },
    {
      nombre: "Once (Caballo)",
      valor: "9°",
      descripcion: "Todas las figuras de caballo",
      imagen: "/placeholder.svg?height=120&width=80&text=Q&bg=ff6347&color=ffffff",
      color: "from-pink-400 to-pink-600",
      textColor: "text-pink-900",
    },
    {
      nombre: "Diez (Sota)",
      valor: "10°",
      descripcion: "Todas las figuras de sota",
      imagen: "/placeholder.svg?height=120&width=80&text=J&bg=20b2aa&color=ffffff",
      color: "from-teal-400 to-teal-600",
      textColor: "text-teal-900",
    },
    {
      nombre: "Sietes falsos",
      valor: "11°",
      descripcion: "7 de copas y 7 de bastos",
      imagen: "/placeholder.svg?height=120&width=80&text=7♥&bg=b22222&color=ffffff",
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-900",
    },
    {
      nombre: "Seises",
      valor: "12°",
      descripcion: "Todos los 6",
      imagen: "/placeholder.svg?height=120&width=80&text=6&bg=708090&color=ffffff",
      color: "from-slate-400 to-slate-600",
      textColor: "text-slate-900",
    },
    {
      nombre: "Cincos",
      valor: "13°",
      descripcion: "Todos los 5",
      imagen: "/placeholder.svg?height=120&width=80&text=5&bg=556b2f&color=ffffff",
      color: "from-emerald-400 to-emerald-600",
      textColor: "text-emerald-900",
    },
    {
      nombre: "Cuatros",
      valor: "14°",
      descripcion: "Todos los 4",
      imagen: "/placeholder.svg?height=120&width=80&text=4&bg=2f4f4f&color=ffffff",
      color: "from-zinc-400 to-zinc-600",
      textColor: "text-zinc-900",
    },
  ]

  const senas = [
    { carta: "Ancho de espadas", sena: "Guiño de ojo", icon: "😉", color: "bg-yellow-100 border-yellow-300" },
    { carta: "Siete de espadas", sena: "Levantar cejas", icon: "🤨", color: "bg-orange-100 border-orange-300" },
    { carta: "Tres", sena: "Mostrar tres dedos", icon: "✌️", color: "bg-blue-100 border-blue-300" },
    { carta: "Flor", sena: "Inflar mejillas", icon: "😮", color: "bg-purple-100 border-purple-300" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "introduccion":
        return (
          <div className="space-y-8">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-600/10 rounded-3xl"></div>
              <div className="relative p-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-6">
                  ¡Bienvenido al Truco Argentino!
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-white to-yellow-500 mx-auto mb-8 rounded-full shadow-lg"></div>
                <Sparkles className="h-12 w-12 text-yellow-500 mx-auto animate-pulse" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Hand className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">El Juego</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    El Truco es un juego de cartas muy popular en Argentina, jugado tradicionalmente con un
                    <span className="font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-md mx-1">
                      mazo español de 40 cartas
                    </span>
                    (se eliminan los 8 y los 9).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Crown className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800">La Tradición</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Es más que un juego: es un
                    <span className="font-bold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-md mx-1">
                      símbolo de la cultura popular argentina
                    </span>
                    , lleno de picardía, estrategia y tradición.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-yellow-600 text-white">
              <CardContent className="p-8 text-center">
                <Sword className="h-16 w-16 mx-auto mb-4 animate-bounce" />
                <h3 className="text-3xl font-bold mb-4">¡Prepárate para la batalla!</h3>
                <p className="text-xl text-blue-100">
                  Aprende las reglas, domina las estrategias y conviértete en un maestro del Truco Argentino
                </p>
              </CardContent>
            </Card>
          </div>
        )

      case "objetivo":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Objetivo del Juego
              </h2>
              <Target className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-800 mb-2">Meta Principal</h3>
                    <p className="text-gray-600">La clave para la victoria</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <p className="text-xl text-gray-700 mb-6">
                    Alcanzar una cantidad determinada de puntos antes que el equipo contrario:
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Badge className="text-2xl p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all">
                      15 puntos
                    </Badge>
                    <span className="text-3xl text-gray-400 self-center">o</span>
                    <Badge className="text-2xl p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all">
                      30 puntos
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <ChevronRight className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-green-800">Estrategias inteligentes</span>
                    </div>
                    <p className="text-green-700 text-sm">Planifica tus jugadas</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <ChevronRight className="h-6 w-6 text-orange-600" />
                      <span className="font-semibold text-orange-800">Engaños y farol</span>
                    </div>
                    <p className="text-orange-700 text-sm">El arte del bluff</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <ChevronRight className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold text-purple-800">Apuestas calculadas</span>
                    </div>
                    <p className="text-purple-700 text-sm">Riesgo vs recompensa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "cartas":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Valor de las Cartas
              </h2>
              <p className="text-xl text-gray-600 mb-6">Jerarquía de mayor a menor (de la más fuerte a la más débil)</p>
              <Hand className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <div className="grid gap-6">
              {/* Ordenar las cartas según la jerarquía oficial */}
              {[
                0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
              ].map((jerarquia, index) => {
                const carta = cartas[jerarquia];
                if (!carta) return null;
                return (
                  <Card
                    key={jerarquia}
                    className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                      index < 4 ? "ring-2 ring-yellow-400 bg-gradient-to-r from-yellow-50 to-white" : "bg-white"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Imagen de la carta OCULTA intencionalmente */}
                        <div className="relative">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${carta.color} shadow-lg w-20 h-28 flex items-center justify-center`}>
                            {/* Imagen oculta por pedido del usuario */}
                            {/* <img src={`/cards/${jerarquia}.webp`} alt={carta.nombre} className="w-20 h-28 object-cover rounded-lg shadow-md bg-white" onError={e => (e.currentTarget.src = "/placeholder.svg")} /> */}
                          </div>
                          {index < 4 && (
                            <div className="absolute -top-2 -right-2">
                              <Star className="h-8 w-8 text-yellow-500 fill-current animate-pulse" />
                            </div>
                          )}
                        </div>
                        {/* Información de la carta */}
                        <div className="flex-1 text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                            <Badge
                              className={`text-lg px-4 py-2 ${
                                index < 4
                                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                                  : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                              }`}
                            >
                              {carta.valor}
                            </Badge>
                            <h4 className="text-2xl font-bold text-gray-800">{carta.nombre}</h4>
                          </div>
                          <p className="text-gray-600 text-lg">{carta.descripcion}</p>
                          {index < 4 && (
                            <div className="mt-3">
                              <Badge variant="outline" className="text-yellow-700 border-yellow-400 bg-yellow-50">
                                ⭐ Carta Premium
                              </Badge>
                            </div>
                          )}
                        </div>
                        {/* Indicador visual */}
                        <div className={`hidden sm:block w-4 h-20 rounded-full bg-gradient-to-b ${carta.color}`}></div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <a href="/todas-las-cartas">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                  Ver todas las cartas del mazo
                </Button>
              </a>
            </div>
          </div>
        )

      case "modalidades":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Modalidades de Juego
              </h2>
              <Users className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300/20 rounded-bl-full"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-blue-600 text-white">Clásico</Badge>
                  </div>
                  <CardTitle className="text-2xl text-blue-800">Individual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-blue-600 mb-2">2</p>
                    <p className="text-blue-700 font-semibold">jugadores</p>
                  </div>
                  <p className="text-gray-700 text-center">
                    Mano a mano, el duelo clásico del truco. Pura estrategia individual.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300/20 rounded-bl-full"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-yellow-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-yellow-600 text-white">Popular</Badge>
                  </div>
                  <CardTitle className="text-2xl text-yellow-800">Por Parejas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-yellow-600 mb-2">4</p>
                    <p className="text-yellow-700 font-semibold">jugadores</p>
                  </div>
                  <p className="text-gray-700 text-center">
                    2 vs. 2, la modalidad más popular. Trabajo en equipo y señas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-300/20 rounded-bl-full"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-green-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-green-600 text-white">Avanzado</Badge>
                  </div>
                  <CardTitle className="text-2xl text-green-800">Por Tríos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-green-600 mb-2">6</p>
                    <p className="text-green-700 font-semibold">jugadores</p>
                  </div>
                  <p className="text-gray-700 text-center">
                    3 vs. 3, para grupos grandes. Máxima complejidad estratégica.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "estructura":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Estructura de la Mano
              </h2>
              <ChevronRight className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg">
                      <Badge className="bg-white text-blue-600 text-2xl px-4 py-2">1</Badge>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Tres Bazas por Mano</h3>
                      <p className="text-lg text-gray-600">
                        Cada mano se compone de <strong className="text-blue-600">tres bazas consecutivas</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg">
                      <Badge className="bg-white text-yellow-600 text-2xl px-4 py-2">2</Badge>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Regla de Victoria</h3>
                      <p className="text-lg text-gray-600">
                        Gana la mano quien gana <strong className="text-yellow-600">dos de las tres bazas</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg">
                      <Badge className="bg-white text-green-600 text-2xl px-4 py-2">3</Badge>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Desempate</h3>
                      <p className="text-lg text-gray-600">
                        Si hay empate, gana el que <strong className="text-green-600">"es mano"</strong> (quien reparte)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "cantos":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Cantos y Envido
              </h2>
              <Eye className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Envido */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-white overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-green-700">Envido</CardTitle>
                  </div>
                  <Badge className="w-fit bg-green-100 text-green-800 border border-green-300">Hasta 3 puntos</Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">📋 Regla Principal:</p>
                    <p className="text-green-700">
                      Se juega <strong>antes de la primera baza</strong>. Cada jugador suma dos cartas del mismo palo.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-400">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-green-800">Envido</h4>
                        <Badge className="bg-green-500 text-white">2 puntos</Badge>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-green-800">Real Envido</h4>
                        <Badge className="bg-green-600 text-white">3 puntos</Badge>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-600">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-green-800">Falta Envido</h4>
                        <Badge className="bg-green-700 text-white">Puntos para ganar</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Truco */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-50 to-white overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Sword className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-red-700">Truco</CardTitle>
                  </div>
                  <Badge className="w-fit bg-red-100 text-red-800 border border-red-300">Hasta 3 puntos</Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <p className="text-red-800 font-semibold mb-2">⚔️ Regla Principal:</p>
                    <p className="text-red-700">
                      Se canta durante la mano, generalmente antes o después de la primera baza.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-red-400">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-red-800">Truco</h4>
                        <Badge className="bg-red-500 text-white">1 punto</Badge>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-red-500">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-red-800">Retruco</h4>
                        <Badge className="bg-red-600 text-white">2 puntos</Badge>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-red-600">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-red-800">Vale Cuatro</h4>
                        <Badge className="bg-red-700 text-white">3 puntos</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-400 rounded-full">
                    <Eye className="h-6 w-6 text-yellow-800" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800">¡Importante!</h3>
                </div>
                <p className="text-yellow-800 text-lg">
                  El rival puede aceptar <strong>("quiero")</strong> o rechazar <strong>("no quiero")</strong>. Si
                  rechaza, el que lo cantó gana los puntos del nivel anterior.
                </p>
              </CardContent>
            </Card>
          </div>
        )

      case "flor":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Flor
              </h2>
              <Smile className="h-16 w-16 text-purple-600 mx-auto animate-pulse" />
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                      <Smile className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-800 mb-2">¿Qué es la Flor?</h3>
                      <p className="text-purple-600">La jugada especial del truco</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl mb-8 border border-purple-200">
                  <p className="text-2xl text-center text-purple-800 font-bold">🌸 Tres cartas del mismo palo 🌸</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                      <Badge className="bg-purple-600 text-white text-lg px-3 py-1">1</Badge>
                      <span className="text-lg">
                        Se canta <strong className="text-purple-700">antes del envido</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                      <Badge className="bg-purple-600 text-white text-lg px-3 py-1">2</Badge>
                      <span className="text-lg">
                        Vale <strong className="text-purple-700">3 puntos automáticamente</strong>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                      <Badge className="bg-purple-600 text-white text-lg px-3 py-1">3</Badge>
                      <span className="text-lg">
                        Puede valer más con <strong className="text-purple-700">"contra flor al resto"</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                      <Badge className="bg-purple-600 text-white text-lg px-3 py-1">4</Badge>
                      <span className="text-lg">
                        <strong className="text-purple-700">No es compatible con el envido</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border border-pink-200">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-purple-800 mb-3">🎯 Regla de Oro</h4>
                    <p className="text-xl text-purple-700">
                      Si hay flor, <strong>no hay envido</strong>. La flor tiene prioridad absoluta.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "puntaje":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Puntaje y Ganador
              </h2>
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-white overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-yellow-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-yellow-800">Objetivo Final</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 text-gray-700">El juego finaliza cuando un jugador o equipo alcanza:</p>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center shadow-lg">
                      <p className="text-3xl font-bold mb-2">15</p>
                      <p className="text-blue-100">puntos</p>
                    </div>
                    <div className="text-center text-2xl text-gray-400 font-bold">O</div>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl text-white text-center shadow-lg">
                      <p className="text-3xl font-bold mb-2">30</p>
                      <p className="text-yellow-100">puntos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-50 to-white overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-400 to-red-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-red-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-red-800">Zona de Malas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-4">
                    <p className="text-red-800 text-lg">
                      En juegos por 30 puntos, al llegar a <strong>15 puntos</strong> se entra en:
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge className="text-xl p-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
                      "Zona de Malas"
                    </Badge>
                  </div>
                  <p className="text-gray-600 mt-4 text-center">
                    Se aplican reglas específicas como no poder cantar ciertos desafíos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                    <Hand className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Anotador (Tantos o Porotos)</h3>
                    <p className="text-lg text-gray-700">
                      Se lleva un registro de puntos para contar el progreso de cada equipo durante la partida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "senas":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Señas y Estrategia
              </h2>
              <Eye className="h-16 w-16 text-orange-600 mx-auto animate-pulse" />
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                      <Eye className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-orange-800 mb-2">Comunicación entre Compañeros</h3>
                      <p className="text-orange-600">El arte de las señas discretas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl mb-8 border border-orange-200">
                  <p className="text-xl text-center text-orange-800">
                    En parejas, se permite el uso de <strong>señas discretas</strong> para indicar el juego
                    <br />
                    <span className="text-lg text-orange-700">(solo con gestos, sin hablar)</span>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {senas.map((sena, index) => (
                    <Card
                      key={index}
                      className={`border-2 ${sena.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{sena.carta}</h4>
                            <p className="text-gray-600">{sena.sena}</p>
                          </div>
                          <div className="text-4xl bg-white p-3 rounded-full shadow-md">{sena.icon}</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-sm text-gray-600 text-center">Seña tradicional argentina</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border border-yellow-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-500 rounded-full">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-800">¡Regla de Oro!</h4>
                  </div>
                  <p className="text-xl text-yellow-800">
                    Las señas deben hacerse <strong>disimuladamente</strong> y son parte esencial del juego estratégico.
                    ¡La sutileza es clave!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "notas":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Notas Adicionales
              </h2>
              <Star className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Hand className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Preparación del Mazo</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Mezclar bien</span>
                      </div>
                      <p className="text-blue-700 text-sm">El mazo debe mezclarse antes de cada mano</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Cortar mazo</span>
                      </div>
                      <p className="text-blue-700 text-sm">El jugador a la derecha del repartidor "corta"</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Primera baza</span>
                      </div>
                      <p className="text-blue-700 text-sm">El jugador a la izquierda del repartidor empieza</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800">En el Envido</h3>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-green-800 font-semibold text-center">
                        ✅ <strong>NO se puede mentir</strong>
                      </p>
                      <p className="text-green-700 text-sm text-center mt-2">Hay que mostrar la verdad si se pide</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-red-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                        <Sword className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-red-800">En el Truco</h3>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl border border-red-200">
                      <p className="text-red-800 font-semibold text-center">
                        🎭 <strong>SÍ se puede mentir</strong>
                      </p>
                      <p className="text-red-700 text-sm text-center mt-2">Forma parte del juego psicológico</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header mejorado */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-yellow-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center">
            <div className="mb-6">
              <Crown className="h-20 w-20 text-yellow-400 mx-auto animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Reglas del Truco Argentino
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-6">Tradición, estrategia y picardía criolla</p>
            <div className="w-40 h-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 mx-auto rounded-full shadow-lg"></div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">🇦🇷 Cultura Argentina</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-100 border-yellow-300/30 text-lg px-4 py-2">
                🎯 Estrategia
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-300/30 text-lg px-4 py-2">🃏 40 Cartas</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation mejorado */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <Star className="h-6 w-6" />
                  Navegación
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1 p-2">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <Button
                        key={section.id}
                        variant={activeSection === section.id ? "default" : "ghost"}
                        className={`w-full justify-start text-left transition-all duration-200 ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {section.title}
                      </Button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">{renderContent()}</div>
          </div>
        </div>
      </div>

      {/* Footer mejorado */}
      <footer className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-yellow-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-5 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-5 left-10 w-12 h-12 bg-yellow-400/10 rounded-full animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center">
            <div className="mb-6">
              <Sparkles className="h-16 w-16 text-yellow-400 mx-auto animate-pulse" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              ¡A jugar se ha dicho!
            </h3>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-blue-200 text-xl leading-relaxed">
                El Truco argentino no es solo un juego de cartas, sino un símbolo de la cultura popular del país, lleno
                de picardía, estrategia y tradición.
              </p>
              <p className="text-blue-300 text-lg mt-6">
                Conocer bien las reglas es solo el primer paso: ¡lo más importante es jugar y disfrutarlo en buena
                compañía!
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/10 text-white border-white/20 text-lg px-6 py-3">🎯 Estrategia</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-300/30 text-lg px-6 py-3">
                🤝 Amistad
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-300/30 text-lg px-6 py-3">🇦🇷 Tradición</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
