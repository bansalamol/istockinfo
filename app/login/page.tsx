import Link from 'next/link'
import { Form as LoginForm } from './form'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <LoginForm />
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-blue-500 hover:underline">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}
