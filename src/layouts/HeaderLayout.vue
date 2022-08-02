<template>
    <header>
        <div class="bg-white grow">
            <div class="flex justify-between items-center border-b-2 px-6 border-gray-100 py-3 md:justify-start md:space-x-10">
                <nav class="hidden md:flex space-x-10">
                    <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#">
                        <router-link :to="{name: 'index'}">Catalogo</router-link>
                    </a>
                    <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#">
                        <router-link :to="{name: 'productos.index'}">Registros de producto</router-link>
                    </a>
                </nav>
            </div>
        </div>
    </header>
</template>