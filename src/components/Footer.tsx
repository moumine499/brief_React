import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Bus } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-9 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-100">SAFAR</span>
            </div>
            <p className="text-sm">
              SAFAR est une plateforme de réservation de billets de bus fiable et rapide, pour voyager en toute tranquillité.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-4">
              <a href="#"><Facebook className="w-5 h-5 hover:text-cyan-700" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-cyan-700" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-cyan-700" /></a>
              <a href="#"><Mail className="w-5 h-5 hover:text-cyan-700" /></a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-md font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-700">Accueil</a></li>
              <li><a href="#" className="hover:text-cyan-700">Réserver</a></li>
              <li><a href="#" className="hover:text-cyan-700">Destinations</a></li>
              <li><a href="#" className="hover:text-cyan-700">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-700">Réservation en ligne</a></li>
              <li><a href="#" className="hover:text-cyan-700">Annulation</a></li>
              <li><a href="#" className="hover:text-cyan-700">Paiement mobile</a></li>
              <li><a href="#" className="hover:text-cyan-700">Assistance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Rue du Voyage, N'Djamena, Tchad</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>+235 66 00 11 22</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>contact@safar.td</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SAFAR. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-cyan-700">Mentions légales</a>
            <a href="#" className="hover:text-cyan-700">Politique de confidentialité</a>
            <a href="#" className="hover:text-cyan-700">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
