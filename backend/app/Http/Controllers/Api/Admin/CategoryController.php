<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryCreateRequest;
use App\Models\Category;
use App\Repo\Admin\CategoryRepo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    public function __construct(protected CategoryRepo $categoryRepo)
    {
    }
    public function index(Request $request)  : JsonResponse
    {
        $categories = $this->categoryRepo->get($request);
        return response()->json([
            'categories' => $categories
        ]);
    }

    public function create(CategoryCreateRequest $request)  : JsonResponse
    {
        $category = $this->categoryRepo->create($request);
        return response()->json([
            'category' => $category,
            'message' => 'Category created successfully.'
        ],Response::HTTP_CREATED);
    }

    public function update(CategoryCreateRequest $request,Category $category)  : JsonResponse
    {
        $updated_category = $this->categoryRepo->update($request, $category);
        return response()->json([
            'category' => $updated_category,
            'message' => 'Category updated successfully.'
        ],Response::HTTP_OK);
    }

    public function delete(Category $category)  : JsonResponse
    {
        $this->categoryRepo->delete($category);
        return response()->json([
            'message' => 'Category deleted successfully.'
        ],Response::HTTP_OK);
    }


}
