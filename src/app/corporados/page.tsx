'use client';
import React from 'react';
import Image from 'next/image';

const CorporadosPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4">Información de Corporados</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">Corporado Único</h2>
                <a href="https://jacrosablanca1girardot.vercel.app/" target="_blank" rel="noopener noreferrer"> {/* Cambia el enlace a la URL deseada */}
                    <Image
                        src="/logojac.png" // Cambia esta ruta al logo del corporado
                        alt="Logo del Corporado Único"
                        width={200} // Ajusta el tamaño según sea necesario
                        height={100} // Ajusta el tamaño según sea necesario
                        className="cursor-pointer mb-4" // Agrega un cursor pointer para indicar que es clickeable
                    />
                </a>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">Asamblea General de Corporados</h2>
                <p>
                    La Junta de Acción Comunal, por ser la única corporada, conforma la Asamblea General de Corporados de la organización.
                    En este caso, la Asamblea General de Corporados es la misma Asamblea General de Afiliados de la Junta de Acción Comunal,
                    integrada por todos sus afiliados.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Junta Directiva</h2>
                <p className="mb-4">
                    La Junta Directiva está compuesta por miembros elegidos por la Asamblea General.
                    Su función principal es supervisar la gestión del Gerente y asegurar que la organización
                    cumpla con sus objetivos estratégicos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Presidente */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Presidente" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Presidente</h3>
                        <p className="text-gray-600">Nombre del Presidente</p>
                    </div>
                    {/* Vicepresidente */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Vicepresidente" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Vicepresidente</h3>
                        <p className="text-gray-600">Nombre del Vicepresidente</p>
                    </div>
                    {/* Tesorero */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Tesorero" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Tesorero</h3>
                        <p className="text-gray-600">Nombre del Tesorero</p>
                    </div>
                    {/* Secretario */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Secretario" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Secretario</h3>
                        <p className="text-gray-600">Nombre del Secretario</p>
                    </div>
                    {/* Vocal 1 */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Vocal 1" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Vocal 1</h3>
                        <p className="text-gray-600">Nombre del Vocal 1</p>
                    </div>
                    {/* Vocal 2 */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Vocal 2" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Vocal 2</h3>
                        <p className="text-gray-600">Nombre del Vocal 2</p>
                    </div>
                    {/* Vocal 3 */}
                    <div className="text-center">
                        <img src="/logo.png" alt="Vocal 3" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Vocal 3</h3>
                        <p className="text-gray-600">Nombre del Vocal 3</p>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">Gerente</h2>
                <p>
                    El Gerente es responsable de la administración diaria de la organización.
                    Se encarga de implementar las decisiones de la Junta Directiva y gestionar los recursos
                    de manera eficiente.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">Organigrama</h2>
                <p>
                    El organigrama detalla la estructura organizativa de la empresa, mostrando las
                    relaciones jerárquicas y funcionales entre los diferentes departamentos y roles.
                    Esto ayuda a clarificar las responsabilidades y la comunicación dentro de la organización.
                </p>
            </section>
        </div>
    );
};

export default CorporadosPage;