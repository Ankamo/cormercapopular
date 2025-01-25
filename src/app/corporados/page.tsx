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
                <h2 className="text-xl font-semibold mb-4 text-center">Junta Directiva</h2>
                <p className="mb-4 text-center">
                    La Junta Directiva está compuesta por miembros elegidos por la Asamblea General.
                    Su función principal es supervisar la gestión del Gerente y asegurar que la organización
                    cumpla con sus objetivos estratégicos.
                </p>
                <div className="flex flex-col items-center gap-8">
                    {/* Primera fila */}
                    <div className="flex flex-wrap justify-center gap-6">
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
                    </div>

                    {/* Segunda fila */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Delegado 1 */}
                        <div className="text-center">
                            <img src="/logo.png" alt="Delegado 1" className="w-32 h-32 rounded-full mx-auto object-cover" />
                            <h3 className="text-lg font-semibold mt-2">Delegado 1</h3>
                            <p className="text-gray-600">Nombre del Delegado 1</p>
                        </div>
                        {/* Delegado 2 */}
                        <div className="text-center">
                            <img src="/logo.png" alt="Delegado 2" className="w-32 h-32 rounded-full mx-auto object-cover" />
                            <h3 className="text-lg font-semibold mt-2">Delegado 2</h3>
                            <p className="text-gray-600">Nombre del Delegado 2</p>
                        </div>
                        {/* Delegado 3 */}
                        <div className="text-center">
                            <img src="/logo.png" alt="Delegado 3" className="w-32 h-32 rounded-full mx-auto object-cover" />
                            <h3 className="text-lg font-semibold mt-2">Delegado 3</h3>
                            <p className="text-gray-600">Nombre del Delegado 3</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Gerente</h2>
                <p className="mb-4 text-center">
                    El Gerente es responsable de la administración diaria de la organización.
                    Se encarga de implementar las decisiones de la Junta Directiva y gestionar los recursos
                    de manera eficiente.
                </p>
                <div className="flex justify-center">
                    <div className="text-center">
                        <img src="/logo.png" alt="Gerente" className="w-32 h-32 rounded-full mx-auto object-cover" />
                        <h3 className="text-lg font-semibold mt-2">Gerente</h3>
                        <p className="text-gray-600">Nombre del Gerente</p>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Organigrama</h2>
                <p className="mb-4 text-center">
                    Este organigrama presenta la jerarquía organizativa de nuestra entidad, destacando la Asamblea General de Corporados,
                    la Junta Directiva y el Gerente como principales figuras.
                </p>

                {/* Organigrama */}
                <div className="flex flex-col items-center space-y-8">
                    {/* Nivel 1: Asamblea General de Corporados */}
                    <div className="text-center group">
                        <div className="w-40 h-40 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold transition-transform duration-300 transform group-hover:scale-110 shadow-lg">
                            Asamblea General <br /> de Corporados
                        </div>
                    </div>

                    {/* Nivel 2: Junta Directiva */}
                    <div className="text-center group">
                        <div className="w-36 h-36 rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-semibold transition-transform duration-300 transform group-hover:scale-110 shadow-lg">
                            Junta Directiva
                        </div>
                    </div>

                    {/* Nivel 3: Gerente */}
                    <div className="text-center group">
                        <div className="w-32 h-32 rounded-full bg-yellow-500 text-white flex items-center justify-center text-lg font-semibold transition-transform duration-300 transform group-hover:scale-110 shadow-lg">
                            Gerente
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CorporadosPage;