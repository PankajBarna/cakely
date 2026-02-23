import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const NotFound = () => {
  return (
    <div
      data-testid="not-found-page"
      className="min-h-screen flex items-center justify-center bg-secondary px-4"
    >
      <div className="text-center">
        <div className="text-9xl font-heading font-bold text-primary/20 mb-4">
          404
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-accent text-white rounded-full"
          >
            <Link to="/" data-testid="not-found-home-btn">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full"
          >
            <Link to="/" onClick={() => window.history.back()} data-testid="not-found-back-btn">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
