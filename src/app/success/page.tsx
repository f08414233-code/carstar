'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('session_id');
    setSessionId(id);
    
    // Clear cart after successful payment
    if (id) {
      clearCart();
    }
  }, [searchParams, clearCart]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-4">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>

            {sessionId && (
              <div className="bg-muted p-4 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="font-mono text-sm">{sessionId}</p>
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    What's Next?
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                    <li>• You'll receive an order confirmation email shortly</li>
                    <li>• We'll send you shipping updates via email</li>
                    <li>• Your items will be delivered within 3-7 business days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" variant="outline">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg">
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Need help? Contact our support team at{' '}
              <a href="mailto:support@autohub.com" className="text-primary hover:underline">
                support@autohub.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}