import Link from 'next/link'
import { Form as RegisterForm } from './form'

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <RegisterForm />
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
