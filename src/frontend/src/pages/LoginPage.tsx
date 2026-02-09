import { useState, FormEvent } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Login attempt:', { email, password: '***' });
        setIsSubmitting(false);
    };

    return (
        <div className="login-page-wrapper">
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                        <div className="card shadow-lg border-0 login-card">
                            <div className="card-body p-4 p-sm-5">
                                <div className="text-center mb-4">
                                    <h1 className="h3 mb-2 fw-bold text-dark">Welcome Back</h1>
                                    <p className="text-muted small">Please sign in to your account</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-medium text-dark">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label fw-medium text-dark">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg fw-medium"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Signing in...
                                                </>
                                            ) : (
                                                'Log in'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <footer className="text-center mt-4">
                            <p className="text-muted small mb-0">
                                © 2026. Built with love using{' '}
                                <a 
                                    href="https://caffeine.ai" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-decoration-none footer-link"
                                >
                                    caffeine.ai
                                </a>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
