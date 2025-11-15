import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-chocolat.jpg";
import { Heart, Gift, Waves, Building2, Sparkles } from "lucide-react";

const ORDER_URL = "https://asso.initiatives.fr/boutique?utm_source=etiquette-cat-chocolat&utm_medium=qrcode&utm_campaign=chocolat&utm_content=YGFLCW";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <Badge className="mb-4 bg-festive text-festive-foreground px-6 py-2 text-base md:text-lg font-semibold">
            <Sparkles className="w-4 h-4 mr-2" />
            Campagne de Noël 2024
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Aidez nos P'tits Loups<br />à Voir les Requins ! 🦈
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl font-medium">
            Chocolats gourmands pour financer le voyage de nos élèves de CE1 et CE2 à Océanopolis (Brest)
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open(ORDER_URL, '_blank')}
          >
            <Gift className="w-6 h-6 mr-3" />
            JE COMMANDE MES CHOCOLATS ICI !
          </Button>
        </div>
      </header>

      {/* Le Rêve Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Waves className="w-16 h-16 mx-auto mb-6 text-primary" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Un Voyage Éducatif Inoubliable
            </h2>
            
            <div className="prose prose-lg md:prose-xl mx-auto text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed">
                Chaque achat de chocolat finance le <span className="text-primary font-semibold">voyage de 3 jours à Brest</span> des enfants de l'<span className="font-semibold">École Publique de La Gabillais</span>.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                Le point d'orgue de ce séjour ? La visite de l'<span className="text-primary font-semibold">incroyable aquarium Océanopolis</span>, où nos élèves découvriront les mystères des océans et rencontreront les requins !
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Heart className="w-4 h-4 mr-2" />
                3 jours à Brest
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Waves className="w-4 h-4 mr-2" />
                Visite Océanopolis
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                Classes CE1 & CE2
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Public Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Gift className="w-12 h-12 text-accent mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Faites vos Cadeaux et une Bonne Action !
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 leading-relaxed">
                Commandez des <span className="text-secondary font-semibold">chocolats de qualité</span> pour vos fêtes de fin d'année tout en faisant une <span className="text-accent font-semibold">bonne action</span> pour les enfants de l'école publique de La Gabillais.
              </p>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-bold"
                  onClick={() => window.open(ORDER_URL, '_blank')}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Commander maintenant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offre Entreprises Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-6 bg-festive text-festive-foreground px-8 py-4 text-xl md:text-2xl font-bold inline-flex items-center shadow-2xl">
                <Building2 className="w-7 h-7 mr-3" />
                OFFRE SPÉCIALE ENTREPRISES
              </Badge>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                🎅 Cadeaux d'Affaires de Noël :<br />Double Action !
              </h2>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl leading-relaxed mb-6">
                      Vous souhaitez faire des <span className="font-bold text-festive">cadeaux pour vos fournisseurs ou vos clients</span> pour Noël ?
                    </p>
                    
                    <p className="text-xl md:text-2xl leading-relaxed">
                      Faites une <span className="font-bold">bonne action</span> et profitez de <span className="text-festive font-bold text-3xl">-20%</span> de réduction !
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="bg-accent text-accent-foreground rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl font-bold mb-2">-20%</div>
                      <div className="text-lg font-semibold">Réduction<br />Entreprises</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <Button 
                    size="lg"
                    className="bg-festive hover:bg-festive/90 text-festive-foreground text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
                    onClick={() => window.open(ORDER_URL, '_blank')}
                  >
                    <Building2 className="w-6 h-6 mr-3" />
                    COMMANDER POUR MON ENTREPRISE
                  </Button>
                  
                  <p className="text-white/80 mt-4 text-sm">
                    * Conditions : commande minimum à définir
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            École Publique de La Gabillais
          </h3>
          <p className="text-muted-foreground mb-6">
            Ensemble, aidons nos enfants à découvrir les merveilles de l'océan 🌊
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open(ORDER_URL, '_blank')}
          >
            <Gift className="w-5 h-5 mr-2" />
            Commandez vos chocolats
          </Button>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Merci pour votre générosité ! ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
