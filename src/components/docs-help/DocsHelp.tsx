import React from 'react'

const DocsHelp = () => {
    return (
        <section className="mt-12 p-6 rounded-lg bg-indigo-50 dark:bg-blue-900/20">
            <p className="text-lg font-semibold mb-2">💬 Need Help?</p>
            <ul className="list-disc list-inside space-y-1 text-lg">
                <li>
                    Visit{" "}
                    <a
                        href="https://silverhawk.ritikprojects.dev/docs"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        silverhawk.ritikprojects.dev/docs
                    </a>
                </li>
                <li>Join our community Discord → #infra-support</li>
                <li>Contact: silverhawkapm@gmail.com</li>
            </ul>
        </section>
    )
}

export default DocsHelp